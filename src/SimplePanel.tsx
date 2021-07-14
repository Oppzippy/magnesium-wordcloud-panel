import React from 'react';
import { FieldType, PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { useStyles } from '@grafana/ui';
import ReactWordcloud from 'react-wordcloud';
import { css, cx } from '@emotion/css';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme();
  const styles = useStyles(() => {
    return {
      wrapper: css`
        position: relative;
      `,
      svg: css`
        position: absolute;
        top: 0;
        left: 0;
      `,
      textBox: css`
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px;
      `,
    };
  });

  const words: Array<{ text: string; value: number }> = [];
  let tags: string[] = [];
  let stopWords: string[] = [];

  const tagsField = data.series[options.series_index].fields.find((field) =>
    options.datasource_tags_field ? field.name === options.datasource_tags_field : field.type === FieldType.string
  );
  const stopWordsField = data.series[options.series_index].fields.find((field) =>
    options.datasource_stop_words ? field.name === options.datasource_stop_words : field.type === FieldType.string
  );
  if (tagsField) {
    tags = tagsField.values.toArray();
  }
  if (stopWordsField && options.datasource_stop_words !== undefined) {
    stopWords = stopWordsField.values.toArray();
  }
  if (options.stop_words !== undefined) {
    options.stop_words.split(',').forEach((element) => {
      stopWords.push(element);
    });
  }
  const wordRegex = new RegExp(options.word_regex, 'g');
  tags = tags.flatMap((tag) => tag.match(wordRegex) ?? []).filter((s) => s.length !== 0);
  const count = new Map<string, number>();
  for (const tag of tags) {
    count.set(tag, (count.get(tag) ?? 0) + 1);
  }
  count.forEach((wordCount, value) => {
    if (stopWords.indexOf(value) === -1) {
      words.push({ text: value, value: wordCount });
    }
  });

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <div style={{ height: height, width: width }}>
        <ReactWordcloud words={words} options={options.wordCloudOptions} />
      </div>
    </div>
  );
};
