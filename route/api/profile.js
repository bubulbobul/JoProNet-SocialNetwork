const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
// const { check, validationResult } = require("express-validator/check");

const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

// @route   GET api/profile/me
// @desc    To get profile of the current connected user
// @access  Private
router.get("/me", auth, async (req, res) => {
  // console.log(req.user)
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    if (!profile) {
      return res.json("");

    } else {
      return res.json(profile);
    }
  } catch (err) {
    // console.error(err.message);
    // console.log("There is no profile for this use")
    res.status(500).send("Server Error");
  }
});

// @route   POST api/profile
// @desc    To create or update a user profile
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("status", "Status is required")
        .not()
        .isEmpty(),
      check("skills", "Skills is required")
        .not()
        .isEmpty(),
      check("languages", "Languages is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // If there is an error then return ....
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      company,
      number,
      workingemail,
      shownumber,
      showworkingemail,
      country,
      area,
      languages,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;

    if (company === "") {
      profileFields.company = null;
    } else {
      profileFields.company = company;
    }

    if (number === "") {
      profileFields.number = null;
    } else {
      profileFields.number = number;
    }

    if (workingemail === "") {
      profileFields.workingemail = null;
    } else {
      profileFields.workingemail = workingemail;
    }

    if (shownumber === "") {
      profileFields.shownumber = null;
    } else {
      profileFields.shownumber = shownumber;
    }

    if (showworkingemail === "") {
      profileFields.showworkingemail = null;
    } else {
      profileFields.showworkingemail = showworkingemail;
    }

    if (country === "") {
      profileFields.country = null;
    } else {
      profileFields.country = country;
    }

    if (area === "") {
      profileFields.area = null;
    } else {
      profileFields.area = area;
    }

    if (website === "") {
      profileFields.website = null;
    } else {
      profileFields.website = website;
    }

    if (location === "") {
      profileFields.location = null;
    } else {
      profileFields.location = location;
    }
    if (bio === "") {
      profileFields.bio = null;
    } else {
      profileFields.bio = bio;
    }
    if (status) profileFields.status = status;
    if (githubusername === "") {
      profileFields.githubusername = null;
    } else {
      profileFields.githubusername = githubusername;
    }
    // Skills - Split into array
    // if (typeof req.body.skills !== "undefined") {
    //   profileFields.skills = req.body.skills.split(",");
    // }
    // Turning the skills into an array
    if (skills) {
      profileFields.skills = skills.split(",").map(skill => skill.trim());
    }
    if (languages === []) {
      profileFields.languages = [null];
    } else {
      profileFields.languages = languages
        .split(",")
        .map(language => language.trim());
    }

    // console.log(profileFields.skills);
    // console.log(profileFields.languages);

    // Build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update a profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      //Create a profile
      profile = new Profile(profileFields);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/profile
// @desc    To get all profiles
// @access  Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/profile/user/:user_id
// @desc    To profile by user ID
// @access  Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["name", "avatar"]);
    // if (!profile) return res.status(400).json({ msg: "Profile not found" });
    if (!profile) {
      return res.json("");

    } else {
      return res.json(profile);
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/profile/user/:user_id
// @desc    Delete profile, user & posts
// @access  Private
router.delete("/", auth, async (req, res) => {
  try {
    // @Todo - remove user posts
    // To remove posts
    await Post.deleteMany({ user: req.user.id });

    // To remove a profile
    await Profile.findOneAndRemove({ user: req.user.id });

    // To remove a user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/profile/experience
// @desc    Update profile by adding experience to a profile
// @access  Private
router.put(
  "/experience",
  [
    auth,
    [
      check("title", "Title is required")
        .not()
        .isEmpty(),
      check("company", "Company is required")
        .not()
        .isEmpty(),
      check("from", "From date is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      company,
      country,
      location,
      from,
      to,
      current,
      description
    } = req.body;

    const newExp = {
      title,
      company,
      country,
      location,
      from,
      to,
      current,
      description
    };

    try {
      // Fisrt fetch the profile where we want toupdate
      const profile = await Profile.findOne({ user: req.user.id });

      profile.experience.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

/************************** */
// @route   GET api/profile/experience/:exp_id
// @desc    Get an experience by its Id
// @access  Private
router.get("/experience/:exp_id", auth, async (req, res) => {

  try {
    // Get profile by user id
    const profile = await Profile.findOne({ user: req.user.id });

    expId = req.params.exp_id;
    const experiences = profile.experience
    const experience = experiences.find(exp => exp._id.toString() === expId)

    const experienceId = experience._id.toString()

    // console.log("expId", expId)
    // console.log("experience", experience)
    // console.log("experience._id", experience._id)
    // console.log("experience._id.toString()", experience._id.toString())
    // console.log("experienceId", experienceId)

    if (experienceId === expId) {
      return res.json(experience);
    } else {
      return res.status(400).json({ msg: "Experience not found" });
    }

  } catch (err) {
    // console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/************************ */

/************************ */
// @route   PUT api/profile/experience/:exp_id
// @desc    Update an experience to a PRofile
// @access  Private
router.put("/experience/:exp_id", [auth,
  [
    check("title", "Title is required")
      .not()
      .isEmpty(),
    check("company", "Company is required")
      .not()
      .isEmpty(),
    check("from", "From date is required")
      .not()
      .isEmpty()
  ]
], async (req, res) => {



  // If there is an error then return ....
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    title,
    company,
    country,
    location,
    from,
    to,
    current,
    description
  } = req.body;

  // Build a experience object
  let experienceFields = {};
  experienceFields.user = req.user.id;

  if (title === "") {
    experienceFields.title = null;
  } else {
    experienceFields.title = title;
  }
  if (company === "") {
    experienceFields.company = null;
  } else {
    experienceFields.company = company;
  }
  if (country === "") {
    experienceFields.country = null;
  } else {
    experienceFields.country = country;
  }
  if (location === "") {
    experienceFields.location = null;
  } else {
    experienceFields.location = location;
  }
  if (from === "") {
    experienceFields.from = null;
  } else {
    experienceFields.from = from;
  }
  if (to === "") {
    experienceFields.to = null;
  } else {
    experienceFields.to = to;
  }
  if (current === "") {
    experienceFields.current = null;
  } else {
    experienceFields.current = current;
  }
  if (description === "") {
    experienceFields.description = null;
  } else {
    experienceFields.description = description;
  }

  try {
    const expId = req.params.exp_id;

    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update a profile
      profile = await Profile.findOneAndUpdate(
        { 'experience._id': expId },
        {
          $set: {
            'experience.$.title': title,
            'experience.$.country': country,
            'experience.$.location': location,
            'experience.$.company': company,
            'experience.$.from': from,
            'experience.$.to': to,
            'experience.$.current': current,
            'experience.$.description': description
          }
        },
        { new: true }
      );

      const experiences = profile.experience
      const experience = experiences.find(exp => exp._id.toString() === expId)

      const experienceId = experience._id.toString()

      if (experienceId === expId) {
        return res.json(experience);
      }
      // else {
      //   return res.status(400).json({ msg: "Experience not found" });
      // }

    }

  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});


/************************** */
// @route   GET api/profile/education/:edu_id
// @desc    Get an education its Id
// @access  Private
router.get("/education/:edu_id", auth, async (req, res) => {
  try {
    // Get profile by user id
    const profile = await Profile.findOne({ user: req.user.id });

    eduId = req.params.edu_id;
    const educations = profile.education
    const education = educations.find(edu => edu._id.toString() === eduId)

    const educationId = education._id.toString()

    // console.log("eduId", eduId)
    // console.log("education", education)
    // console.log("education._id", education._id)
    // console.log("education._id.toString()", education._id.toString())
    // console.log("educationId", educationId)

    if (educationId === eduId) {
      return res.json(education);
    } else {
      return res.status(400).json({ msg: "Education not found" });
    }

  } catch (err) {
    // console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/************************ */

// @route   DELETE api/profile/experience/:exp_id
// @desc    delete experience from profile
// @access  Private
router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    // Get profile by user id
    const profile = await Profile.findOne({ user: req.user.id });

    // And get the remove index
    const removeIndex = profile.experience
      .map(item => item.id)
      .indexOf(req.params.exp_id);

    const exp = profile.experience.splice(removeIndex, 1);
    // console.log(exp)
    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/profile/education
// @desc    Update profile by ADDING education to a profile
// @access  Private
router.put(
  "/education",
  [
    auth,
    [
      check("school", "School is required")
        .not()
        .isEmpty(),
      check("degree", "Degree is required")
        .not()
        .isEmpty(),
      check("fieldofstudy", "Field of study date is required")
        .not()
        .isEmpty(),
      check("from", "From date is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      school,
      degree,
      fieldofstudy,
      country,
      from,
      to,
      current,
      description
    } = req.body;

    const newEdu = {
      school,
      degree,
      country,
      fieldofstudy,
      from,
      to,
      current,
      description
    };

    try {
      // Fisrt fetch the profile where we want to update
      const profile = await Profile.findOne({ user: req.user.id });

      profile.education.unshift(newEdu);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

/************************** */
// @route   PUT api/profile/education/:edu_id
// @desc    Update an education to a PRofile
// @access  Private
router.put("/education/:edu_id", [auth,
  [
    check("school", "School is required")
      .not()
      .isEmpty(),
    check("degree", "Degree is required")
      .not()
      .isEmpty(),
    check("fieldofstudy", "Field of study date is required")
      .not()
      .isEmpty(),
    check("from", "From date is required")
      .not()
      .isEmpty()
  ]
], async (req, res) => {



  // If there is an error then return ....
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    school,
    degree,
    fieldofstudy,
    country,
    from,
    to,
    current,
    description
  } = req.body;

  // Build a education object
  let educationFields = {};
  educationFields.user = req.user.id;

  if (school === "") {
    educationFields.school = null;
  } else {
    educationFields.school = school;
  }
  if (degree === "") {
    educationFields.degree = null;
  } else {
    educationFields.degree = degree;
  }
  if (fieldofstudy === "") {
    educationFields.fieldofstudy = null;
  } else {
    educationFields.fieldofstudy = fieldofstudy;
  }
  if (country === "") {
    educationFields.country = null;
  } else {
    educationFields.country = country;
  }
  if (from === "") {
    educationFields.from = null;
  } else {
    educationFields.from = from;
  }
  if (to === "") {
    educationFields.to = null;
  } else {
    educationFields.to = to;
  }
  if (current === "") {
    educationFields.current = null;
  } else {
    educationFields.current = current;
  }
  if (description === "") {
    educationFields.description = null;
  } else {
    educationFields.description = description;
  }

  try {
    const eduId = req.params.edu_id;

    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update a profile
      profile = await Profile.findOneAndUpdate(
        { 'education._id': eduId },
        {
          $set: {
            'education.$.school': school,
            'education.$.degree': degree,
            'education.$.country': country,
            'education.$.fieldofstudy': fieldofstudy,
            'education.$.from': from,
            'education.$.to': to,
            'education.$.current': current,
            'education.$.description': description
          }
        },
        { new: true }
      );

      const educations = profile.education
      const education = educations.find(edu => edu._id.toString() === eduId)

      const educationId = education._id.toString()

      if (educationId === eduId) {
        return res.json(education);
      }
      // else {
      //   return res.status(400).json({ msg: "Experience not found" });
      // }

    }

  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/profile/education/:edu_id
// @desc    delete education from profile
// @access  Private
router.delete("/education/:edu_id", auth, async (req, res) => {
  try {
    // Get profile by user id
    const profile = await Profile.findOne({ user: req.user.id });

    // And get the remove index
    const removeIndex = profile.education
      .map(item => item.id)
      .indexOf(req.params.edu_id);

    profile.education.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/profile/github/username
// @desc    Get user repos from Github
// @access  Public
router.get("/github/:username", (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/users/${
        req.params.username
        }/repos?per_page=5&sort=created:asc&client_id=${config.get(
          "githubClientId"
        )}&client_secret=${config.get("githubSecret")}`,
      method: "GET",
      headers: { "user-agent": "node.js" }
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);
      if (response.statusCode !== 200) {
        return res.stats(404).json({ msg: "No Github profile found" });
      }

      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
