import * as Yup from 'yup';
import Appointment from '../models/Appointment';

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schama.isValid(req.body))) {
      return res.status(400).json({ message: 'Validadions Fails' });
    }

    const { provider_id, date } = req.body;
  }
}

export default new AppointmentController();
