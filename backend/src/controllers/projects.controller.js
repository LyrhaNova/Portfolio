const Project = require('../schemas/projects.schema');
const mongoose = require('mongoose');
// const path = require('path');

exports.createProject = async (req, res) => {
  try {
    const ProjectObject = req.body;

    const { title, description, largeDescription, imageUrl, techs } =
      ProjectObject;

    if (!title || !description || !largeDescription || !imageUrl || !techs) {
      return res
        .status(400)
        .json({ message: 'Informations du Projet manquantes' });
    }

    await new Project(ProjectObject).save();

    return res.status(201).json({ message: 'Projet créé avec succès' });
  } catch (error) {
    console.log('Erreur lors de la création du projet', error);
    return res.status(500).json({ error });
  }
};

exports.editProject = async (req, res) => {
  try {
    const ProjectObject = { ...req.body };
    const project = await Project.findOne({ _id: req.params.id });
    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }
    await Project.updateOne(
      { _id: req.params.id },
      { ...ProjectObject, _id: req.params.id }
    );
    return res.status(200).json({ message: 'Projet modifié avec succès' });
  } catch (error) {
    console.error('Erreur lors de la modification du projet', error);
    return res.status(500).json({ error });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });
    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }
    await Project.deleteOne({ _id: req.params.id });
    return res.status(200).json({ message: 'Projet supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du projet:', error);
    return res
      .status(500)
      .json({ error: 'Erreur serveur lors de la suppression du projet' });
  }
};

exports.getOneProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }
    return res.status(200).json(project);
  } catch (error) {
    console.error('Erreur lors de la récupération du projet', error);
    return res.status(500).json({ error });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    if (!projects) {
      return res.status(200).json([]);
    }

    return res.status(200).json(projects);
  } catch (error) {
    console.error('Erreur lors de la récupération des projets', error);
    return res.status(500).json({ error });
  }
};
