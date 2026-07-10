import { useProgress } from '@react-three/drei';
import LoadingSpinner from './LoadingSpinner';

const SceneLoader = () => {
  const { active, progress } = useProgress();

  if (!active) return null;

  return <LoadingSpinner progress={progress} />;
};

export default SceneLoader;
