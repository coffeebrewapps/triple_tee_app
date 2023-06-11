import { ref } from 'vue';
const env = import.meta.env;

const useConfig = () => {
  const demoUrl = ref('');

  if (env.MODE === 'development') {
    demoUrl.value = 'http://localhost:5173';
  } else {
    demoUrl.value = '/triple_tee_app-demo';
  }

  return {
    demoUrl: demoUrl.value,
  };
};

export default useConfig;
