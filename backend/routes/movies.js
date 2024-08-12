var express = require("express");
var router = express.Router();

router.post("/add", (req, res) => {
  var data = req.body;
  var newMovie = {
    id: data.id,
    title: data.title,
    overview: data.overview,
  };
  try {
    movieList.push(newMovie);
    console.log(movieList);
    res.json({ msg: "Movie Added succesfully" });
  } catch (error) {
    res.json({ msg: "someting went wrong!" });
  }
});
// delete movie with id
router.delete("/:id", (req, res) => {
  try {
    var id = +req.params.id;
    movieList = movieList.filter((mov) => mov.id != id);
    console.log(movieList);
    res.json({ msg: `movie with id ${id} deleted sucssfully` });
  } catch (error) {
    res.json({ msg: "someting went wrong!" });
  }
});

router.put("/:id", (req, res) => {
  var data = req.body;
  var id = +req.params.id;
  for (let index = 0; index < movieList.length; index++) {
    if (movieList[index].id == id) {
      movieList[index].title = data.title;
    }
  }
  console.log(movieList);
  res.json({ msg: `movie with id ${id} Updated sucssfully` });
});

module.exports = router;
