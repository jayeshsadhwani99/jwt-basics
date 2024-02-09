const User = mongoose.schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Role,
  },
});

const Role = mongoose.schema({
  roleKey: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: [],
});

const Permissions = mongoose.schema({
  permission: {
    type: String,
  },
});
