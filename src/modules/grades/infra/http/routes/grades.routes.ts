import usePagination from '@shared/infra/http/middlewares/usePagination';
import { Router } from 'express';
import ensureAuth from '@modules/users/infra/http/middlewares/ensureAuth';

const gradeRouter = Router();
const userController = new UsersControllers();

gradeRouter.use(ensureAuth);

gradeRouter.post('/', userController.create);

gradeRouter.get('/', usePagination, userController.index);

gradeRouter.get('/:id', userController.show);

export default gradeRouter;
