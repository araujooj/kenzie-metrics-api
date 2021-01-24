import usePagination from '@shared/infra/http/middlewares/usePagination';
import { Router } from 'express';
import ensureAuth from '@modules/users/infra/http/middlewares/ensureAuth';
import StudentController from '../controllers/StudentController'

const studentRouter = Router();
const studentController = new StudentController();

studentRouter.use(ensureAuth);

studentRouter.post('/', studentController.create);

studentRouter.get('/', usePagination, studentController.index);

studentRouter.get('/:id', studentController.show);

export default studentRouter;
