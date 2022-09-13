import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/8/0/f/980fe220bd14602b466aeca6c0f8ba97.jpg',
      name: 'Top 100 bài hát trẻ',
    },
    {
      id: 2,
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg',
      name: 'Top 100 Pop Âu Mỹ Hay',
    },
    {
      id: 3,
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/5/4/6/2546e0e43244cb690c675da9c1780511.jpg',
      name: 'Top 100 Nhạc Hàn Quốc',
    },
  ];
  return (
    <div>
      <h1>Nổi bật</h1>
      <AlbumList AlbumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
