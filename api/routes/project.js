const express = require('express');

const router = express.Router();

const Project = require('../model/project');

/* GET ONE Project */
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: 'Project not found!',
      });
    }

    res.status(200).json({
      url: project.url,
      title: project.title,
      description: project.description,
      todos: project.todos,
      reward: project.reward,
      stack: project.stack,
      page: project.stack,
    });

    return console.log(project);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

/* GET ALL Projects */
router.get('/', async (req, res) => {
  try {
    const project = await Project.find();
    const response = await project.map((project) => ({
      _id: project._id,
      url: project.url,
      title: project.title,
      description: project.description,
      todos: project.todos,
      reward: project.reward,
      stack: project.stack,
      page: project.stack,
      msg: 'working',
    }));
    res.status(200).json(response);
    console.log(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

/* POST a Project */
router.post('/', async (req, res) => {
  try {
    const {
      url,
      title,
      description,
      todos,
      reward,
      stack,
      page,
    } = req.body;

    const project = new Project({
      url,
      title,
      description,
      todos,
      reward,
      stack,
      page,
    });

    const response = await project.save();

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate({ _id: req.params.id }, req.body);

    res.status(200).json({
      message: 'Project successfully updated!',
    });

    return console.log(project);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

/* Delete a Project */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.remove({ _id: id });

    res.status(200).json({ msg: 'Project has been deleted!' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
