import useFittingCart from "../state/useFittingCart";
import useJobPacks from "../state/useJobPacks";

export function addJobPack(jobPackName) {
  const fittingsOnCart = useFittingCart.getState().fittings;

  useJobPacks.setState((state) => ({
    jobPacks: [
      ...state.jobPacks,
      { name: jobPackName, jobpacks: fittingsOnCart },
    ],
  }));
}

export function updateJobPackName(jobPackName, newName) {
  const jobPacks = useJobPacks.getState().jobPacks.map((jobpack) => {
    if (jobpack.name === jobPackName) {
      return { ...jobpack, name: newName };
    } else {
      return { ...jobpack };
    }
  });
  useJobPacks.setState(() => ({
    jobPacks: jobPacks,
  }));
}

export function isJobPackDuplicate(jobPackName) {
  const jobPacks = useJobPacks.getState().jobPacks;
  return jobPacks.some((jobpack) => jobpack.name === jobPackName);
}

export function loadJobPack(jobPackName) {
  const jobPacks = useJobPacks.getState().jobPacks;
  const selected = jobPacks.find((jobpack) => jobpack.name === jobPackName);
  useFittingCart.setState(() => ({
    fittings: selected.jobpacks,
  }));
}

export function removeJobPack(jobPackName) {
  const jobPacks = useJobPacks.getState().jobPacks;
  const filteredJobPacks = jobPacks.filter(
    (jobpack) => jobpack.name !== jobPackName
  );
  useJobPacks.setState(() => ({
    jobPacks: filteredJobPacks,
  }));
}
