const server = require('express');
const Recipes = require('./recipe-model.js');

const router = server.Router();

router.get('/',(req, res) => {
   
   Recipes.findAllRecipes()
   .then(recipe => {
       res.json(recipe);
   })
   .catch(err => {
        res.status(500).json({err: 'failed to get recipes'})
   });
});

router.post('/', (req, res) => {

    const newRecipe = req.body;
   
    Recipes.addRecipe(newRecipe)
    .then(recipe => {
        res.json(recipe);
    })
    .catch(err => {
         res.status(500).json({err: 'failed to post recipes'})
    });
 });

router.get('/from/:id',(req, res)=>{

    const {id} =  req.params;
    Recipes.findRecipeByUserId(id)
        .then(recipe => {
            res.json(recipe);
        })
        .catch(error => {
            res.status(500).json({err: 'failed to get recipe with given  user id'})
        })

});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	Recipes.findRecipeById(id)
		.then((recipe) => {
			res.json(recipe);
		})
		.catch((error) => {
			res.status(500).json({ err: 'failed to ger recipe with given id' });
		});
});

router.put('/:id', (req, res) => {
	const changes = req.body;
	const { id } = req.params;

	if (changes) {
		Recipes.updateRecipe(changes, id)
			.then((update) => {
				res.json({ updated: update, id: id });
			})
			.catch((error) => {
				res.status(500).json({ err: 'failed to update recipe with given id' });
			});
	} else {
		res.status(500).json({ err: 'You have to pass in something to update' });
	}
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Recipes.eraseRecipe(id)
		.then((count) => {
			if (count) {
				res.json({ deleted: count, id: id });
			} else {
				res.status(404).json({ message: 'provided id does not exist' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'failed to delete recipe' });
		});
});

module.exports = router;
