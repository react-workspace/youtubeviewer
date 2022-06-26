import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from '../../atoms/Spinner/index'
import Typography from '../../atoms/Typograhy/index'


const Loading = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
`;

const VideosList = (loading,videos) => (
	<>
		{!loading && !videos.length &&
			<Typography>ビデオがありません</Typography>
		}
		{/* videosの中身の数だけVideosListItemを表示 */}
		{loading && <Loading><Spinner /></Loading>}
	</>
);

VideosList.propTypes = {
	videos: PropTypes.arrayOf(PropTypes.shape({})),
	loading: PropTypes.bool,
};

VideosList.defaultProps = {
	videos: [],
	loading: false,
};

export default VideosList;
