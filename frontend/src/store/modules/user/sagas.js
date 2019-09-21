import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { updateProfileSuccess, updateProfileFailure } from './actions';

import api from '~/services/api';

export function* updateProfile({ payload }) {
  try {
    console.tron.log(payload);
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.currentPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao atualizar o perfil, verifique seus dados');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
