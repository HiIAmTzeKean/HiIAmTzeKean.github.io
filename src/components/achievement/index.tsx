import React, { Fragment } from 'react';
import { SanitizedAchievement } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  award,
  awarder,
}: {
  award?: React.ReactNode;
  awarder?: React.ReactNode;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <h3 className="font-semibold">{award}</h3>
    <div className="mb-4 font-normal">{awarder}</div>
  </li>
);

const BracketList = ({
  year,
  awardList,
}: {
  year?: React.ReactNode;
  awardList: { award: React.ReactNode; awarder: React.ReactNode }[];
}) => {
  return (
    <li className="mb-5 ml-4">
      <div
        className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
        style={{ left: '-4.5px' }}
      ></div>
      <div className="my-0.5 text-xs">{year}</div>
      <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
        {awardList.map((element, index) => (
          <ListItem
            key={`${year}-${index}`}
            award={element.award}
            awarder={element.awarder}
          />
        ))}
      </ol>
    </li>
  );
};

interface AchievementProps {
  loading: boolean;
  achievements: SanitizedAchievement[];
}

const Achievement = ({ loading, achievements }: AchievementProps) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 5; index++) {
      array.push(
        <ListItem
          key={index} 
          award={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          awarder={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <>
      {achievements?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Major Achievements
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {Array.from(
                      achievements.reduce((arr, { year, award, awarder }) => {
                        if (year) {
                          if (arr.has(year)) {
                            arr.get(year)?.push({ award, awarder });
                          } else {
                            arr.set(year, [{ award, awarder }]);
                          }
                        }
                        return arr;
                      }, new Map<string, { award: React.ReactNode; awarder: React.ReactNode }[]>()),
                    ).map(([key, value], index) => {
                      return (
                        <BracketList key={index} year={key} awardList={value} />
                      );
                    })}
                  </Fragment>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievement;
