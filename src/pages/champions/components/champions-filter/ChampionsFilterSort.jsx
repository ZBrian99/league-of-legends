import {
	ChampionsFilterSortContainer,
	ChampionsFilterSortImage,
	ChampionsFilterSortText,
} from '../../styled-components';

export const ChampionsFilterSort = ({ handleSort, searchSort }) => {
	return (
		<ChampionsFilterSortContainer onClick={handleSort} variant={searchSort}>
			<ChampionsFilterSortImage src='/league-of-legends/assets/arrowL.png' alt='sort icon' />
			<ChampionsFilterSortText>A-Z</ChampionsFilterSortText>
		</ChampionsFilterSortContainer>
	);
};
