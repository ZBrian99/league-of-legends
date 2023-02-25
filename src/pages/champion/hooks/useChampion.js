import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChampionById } from '../../../services';

export const useChampion = () => {
	const { id } = useParams();
	const [champion, setChampion] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [championData, setChampionData] = useState(null);

	useEffect(() => {
		const getChampion = async () => {
			try {
				const championsData = await getChampionById(id);
				const championsInfo = Object.values(championsData).map((champion) => champion);
				setChampion(championsInfo);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getChampion();
	}, [id]);

	useEffect(() => {
		if (!isLoading) {
			setChampionData(champion.filter((e) => e.id === id)[0]);
		}
	}, [id, isLoading, champion]);

	return { championData, isLoading };
};
