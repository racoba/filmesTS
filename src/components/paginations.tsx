import React from "react";
import { makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { observer } from "mobx-react-lite";


const useStyles = makeStyles({
	div1: {
		marginTop: "3%",
	},
	paginationS: {
		backgroundColor: "black",
		borderRadius: "10px",
	},
});
interface IProps{
	totalPages: number;
	setTotalPages(num: number): void;
	setPage(num: number): void;
}

const Pags: React.FC<IProps> = (props) => {

	const classes = useStyles();

	const handleChange = (n: number) => {
		props.setTotalPages(n);
		props.setPage(n);
	};

	return (
		<div className={classes.div1}>
			<div>
				<Pagination
					className={classes.paginationS}
					count={props.totalPages}
					variant="outlined"
					shape="rounded"
					onChange={(_, number: number) => handleChange(number)}
				/>
			</div>
		</div>
	);
};

export default observer(Pags);
