import React, { useMemo } from 'react';
import ComponentInnerLayout from '@/components/Layout/ComponentInnerLayout';
import { useLocale } from '@/locale/useLocal/useLocal';
import { exampleList } from './examples';
import { NAME_SPACE_GRID_LAYOUT } from './locale';
import { ComponentCodeBlock } from '@/components/DemoBlock';

function GridLayoutExample() {
  const [local] = useLocale<typeof NAME_SPACE_GRID_LAYOUT>({ namespace: NAME_SPACE_GRID_LAYOUT });
  const dataList = useMemo(
    () =>
      Object.keys(local).map((key) => ({
        key,
        ...local[key],
        ...exampleList[key],
      })),
    [local]
  );

  const titleList = useMemo(
    () =>
      dataList.map((item) => ({
        title: item.title,
        href: `#${item.key}`,
      })),
    [dataList]
  );
  return (
    <ComponentInnerLayout titleList={titleList}>
      {dataList.map((data, index) => (
        <ComponentCodeBlock key={index} {...data} />
      ))}
    </ComponentInnerLayout>
  );
}

export default GridLayoutExample;