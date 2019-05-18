import { toast } from 'react-toastify';

export const NotificationSuccess = (message) => {
  toast.success(message, {
    className: 'notification-success',
    bodyClassName: 'notification-body',
  });
};

export const NotificationError = (message) => {
  toast.error(message, {
    className: 'notification-error',
    bodyClassName: 'notification-body',
  });
};
