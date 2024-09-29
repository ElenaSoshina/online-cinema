import { prop, Ref } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { MovieModel } from 'backend-advanced-main/src/movie/movie.model'
import { UserModel } from 'backend-advanced-main/src/user/user.model'

export interface RatingModel extends Base {}

export class RatingModel extends TimeStamps {
	@prop({ ref: () => UserModel })
	userId: Ref<UserModel>

	@prop({ ref: () => MovieModel })
	movieId: Ref<MovieModel>

	@prop()
	value: number
}
