const User = require("../models/user");

async function index(req, res) {
  try {
    const currentUser = await User.findById(req.session.user._id);

    res.render("applications/index.ejs", {
      applications: currentUser.applications,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
}

async function newPage(req, res) {
  res.render("applications/new.ejs");
}

async function create(req, res) {
  try {
    const foundUser = await User.findById(req.session.user._id);
    foundUser.applications.push(req.body);
    await foundUser.save();
    res.redirect(`/users/${foundUser._id}/applications`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
}

async function show(req, res) {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const application = currentUser.applications.id(req.params.applicationId);
    res.render("applications/show.ejs", { application });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
}

module.exports = {
  index,
  new: newPage,
  create,
  show,
};
