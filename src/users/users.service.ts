import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
  create(createUserInput: CreateUserInput) {
    const createdUser = new this.UserModel(createUserInput);
    return createdUser.save();
  }

  findAll() {
    return this.UserModel.find();
  }

  findOne(id: MongooseSchema.Types.ObjectId) {
    return this.UserModel.findById(id);
  }

  update(id: MongooseSchema.Types.ObjectId, updateUserInput: UpdateUserInput) {
    return this.UserModel.findByIdAndUpdate(id, updateUserInput, { new: true });
  }

  remove(id: MongooseSchema.Types.ObjectId) {
    return this.UserModel.findByIdAndDelete(id);
  }
}
