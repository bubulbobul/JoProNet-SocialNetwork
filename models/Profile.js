const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  // This will connect to id which is in User moder (_id)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  company: {
    type: String
  },
  number: {
    type: Number
  },
  workingemail: {
    type: String
  },
  shownumber: {
    type: Boolean
  },
  showworkingemail: {
    type: Boolean
  },
  country: {
    type: String
  },
  area: {
    type: String
  },
  languages: {
    type: [String],
    required: true
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  // Mean: developer, junior dev or senior dev,intructor etc...
  status: {
    type: String,
    required: true
  },
  // An array of string
  skills: {
    type: [String],
    required: true
  },
  // Biographie
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      country: {
        type: String
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      country: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
