import React from "react";
import { makeStyles } from "@material-ui/core";
import HeaderTable from "./headertable";
import Movie from "./movieCard";
import * as types from "../services/apitypes";
import { observer } from "mobx-react-lite";


const useStyles = makeStyles({

	div1: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
	},
});

interface IProps {
	moviesList: types.Movie[];
	setFilterMovies(filterStr: string): void;
}

const Table: React.FC<IProps> = (props) => {

	const classes = useStyles();

	const createNameFilter = (filterStr: string) => {
		props.setFilterMovies(filterStr);
	};


	return (
		<div >
			<HeaderTable
				setSearchNameFilter={createNameFilter}
			/>

			<div className={classes.div1}>
				{props.moviesList.map((item, key) => (
					<Movie key={key} movie={item} />
				))}
			</div>

		</div>
	);
};

export default observer(Table);
