import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ award, awarder }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <h3 className="font-semibold">{award}</h3>
    <div className="mb-4 font-normal">{awarder}</div>
  </li>
);

const BracketList = ({ year, awardList }) => {
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
            key={index}
            award={element.award}
            awarder={element.awarder}
          />
        ))}
      </ol>
    </li>
  );
};

const Achievement = ({ loading, achievement }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 0; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          award={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          awarder={skeleton({ width: 'w-6/12', height: 'h-3' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {achievement?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
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
                      achievement.reduce((arr, { year, award, awarder }) => {
                        if (arr.has(year)) {
                          arr.get(year).push({ award, awarder });
                        } else {
                          arr.set(year, [{ award, awarder }]);
                        }
                        return arr;
                      }, new Map())
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

Achievement.propTypes = {
  loading: PropTypes.bool.isRequired,
  achievement: PropTypes.array.isRequired,
};

ListItem.propTypes = {
  award: PropTypes.node,
  awarder: PropTypes.node,
};

BracketList.propTypes = {
  year: PropTypes.string,
  awardList: PropTypes.array,
};

export default Achievement;
