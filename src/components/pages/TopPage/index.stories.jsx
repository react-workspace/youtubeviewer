import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import VideosListTemplate from '../../templates/VideosListTemplate /index';
import Header from '../../organisms/Header/index';
import SearchForm from '../../organisms/SearchForm/index';
import VideosList from '../../organisms/VideosList/index';

export const TopPagePresenter = ({
	search,
	searchNext,
	defaultKeyword,
	videos,
	loading,
}) => (
	<VideosListTemplate
		headerContents={<Header />}
		searchFormContents={(
			<SearchForm onSubmit={search} defaultValue={defaultKeyword} />
		)}
		videosListContents={<VideosList videos={videos} loading={loading} />}
		onScrollEnd={searchNext}
	/>
);

TopPagePresenter.propTypes = {
	search: PropTypes.func.isRequired,
	searchNext: PropTypes.func.isRequired,
	defaultKeyword: PropTypes.string,
	videos: VideosList.propTypes.videos,
	loading: PropTypes.bool,
};

TopPagePresenter.defaultProps = {
	videos: null,
	loading: false,
	defaultKeyword: '',
};

export default TopPagePresenter;
