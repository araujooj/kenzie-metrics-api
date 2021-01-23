import { Router } from 'express';
import UserRouter from '@modules/users/infra/http/routes/users.routes'
import SessionRouter from '@modules/users/infra/http/routes/session.routes'
import ProfileRouter from '@modules/users/infra/http/routes/profile.routes'

const routes = Router();

routes.use('/sessions', SessionRouter)
routes.use('/users', UserRouter)
routes.use('/profile', ProfileRouter)

export default routes;
