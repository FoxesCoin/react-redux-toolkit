import { useShowState } from './show-state';

export const useModal = (initState: false) => {
  const { hide: hideModal, show: showModal, isShow } = useShowState(initState);

  const show = () => {
    showModal();
    window.document.body.classList.add('modal-open');
  };
  const hide = () => {
    hideModal();
    window.document.body.classList.remove('modal-open');
  };

  return { hide, show, isShow };
};
