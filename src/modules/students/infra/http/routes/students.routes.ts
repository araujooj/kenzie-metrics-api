import usePagination from '@shared/infra/http/middlewares/usePagination';
import { Router } from 'express';
import ensureAuth from '@modules/users/infra/http/middlewares/ensureAuth';

const studentRouter = Router();
const userController = new UsersControllers();

studentRouter.post('/', userController.create);

studentRouter.use(ensureAuth);

studentRouter.get('/', usePagination, userController.index);

studentRouter.get('/:id', userController.show);

export default studentRouter;
