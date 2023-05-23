import Icon from "./Icon";

const StarsQualification = ({ qualification }: any) => {
  if (qualification > 5) qualification = 5;
  if (qualification < 0) qualification = 0;

  return (
    <div className="flex gap-0">
      {Array(5)
        .fill(0)
        .map((e, i) => {
          return (
            <Icon
              variant={qualification >= i + 1 ? "estrella-llena" : "estrella"}
              extraClassName="text-secondary"
              key={i}
            />
          );
        })}
    </div>
  );
};

export default StarsQualification;
