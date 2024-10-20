import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// Enable CORS for all origins
	app.enableCors() // or use app.enableCors({ origin: 'http://localhost:3000' }) to allow specific origins

	app.setGlobalPrefix('api')
	await app.listen(4200)
}
bootstrap()
