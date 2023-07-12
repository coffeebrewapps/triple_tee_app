import { ref } from 'vue';
const env = import.meta.env;

const useConfig = () => {
  const demoUrl = ref('');

  if (env.MODE === 'development') {
    demoUrl.value = 'http://localhost:5173';
  } else if (env.MODE === 'staging') {
    demoUrl.value = '/triple_tee_app-demo';
  } else {
    demoUrl.value = 'demo.tripletee.app';
  }

  return {
    demoUrl: demoUrl.value,
  };
};

export default useConfig;
