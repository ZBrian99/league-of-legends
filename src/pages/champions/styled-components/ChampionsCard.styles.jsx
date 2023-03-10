import styled from '@emotion/styled';
export const ChampionCardTitle = styled.h2`
	text-transform: uppercase;
	font-size: 0.85em;
	font-weight: 500;
	background-color: rgba(12 12 15 / 0.9);
	border-top: 1px solid #927345;
	bottom: 0;
	color: #937341;
	height: 4.8125rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: absolute;
	width: 100%;
	transition: all 0.3s ease-out;
`;

export const ChampionCardDescription = styled.h3`
	background-color: rgba(12 12 15 / 0.9);
	border-top: 1px solid #927345;
	bottom: 0;
	left: 0;
	color: rgba(147, 115, 65, 0.8);
	text-transform: capitalize;
	font-size: 0.8em;
	font-style: italic;
	height: 3.4375rem;
	line-height: 3.4375rem;
	position: absolute;
	text-align: center;
	width: 100%;
	transform: translateY(100%);
	transition: all 0.3s ease-out;
`;

export const ChampionCard = styled.figure`
	/* background-color: #b8b8b8; */
	background-image: url(${({ image }) => image});
	background-repeat: no-repeat;
	background-size: 110% auto;
	background-position: center 30%;
	@media (max-width: 80rem) {
		background-position: center 15%;
	}
	margin: 2rem auto;
	width: 100%;
	height: 100%;
	position: relative;
	transition: transform 0.3s ease-out;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		transform: scale(1.1);
		border: 1px solid #927345;
	}
	&:hover ${ChampionCardTitle} {
		transform: translateY(-3.4375rem);
	}
	&:hover ${ChampionCardDescription} {
		transform: translateY(0);
	}
`;
