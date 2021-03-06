import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "./styles.css";
import { observer } from "mobx-react-lite";


const useStyles = makeStyles({
	input: {
		backgroundColor: "black",
		border: "0.5px solid white",
		color: "white",
		borderRadius: "15px",
		height: "40px",
		width: "",
	},
	div1: {
		height: "10%",
		marginTop: "1%",
	},
	div2: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
});
interface IProps {
	setSearchNameFilter(str: string): void;
}
const Header: React.FC<IProps> = (props) => {

	const classes = useStyles();

	const [toNameFilter, setToNameFilter] = useState("");

	const doFilter = () => {
		props.setSearchNameFilter(toNameFilter);

	};

	const handleSubmitFilter = () => {
		setTimeout(doFilter, 2000);
	};


	const changeNameTF = (e: React.ChangeEvent<HTMLInputElement>) => {
		setToNameFilter(e.target.value);
	};

	return (
		<div className={classes.div1}>
			<div className={classes.div2}>

				<div >
					<TextField
						type="text"
						className={classes.input}
						size="small"
						value={toNameFilter}
						onChange={changeNameTF}
						onKeyUp={handleSubmitFilter}
						variant="outlined"
						placeholder="Ex: Luca"
					/>

				</div>
			</div>

		</div>
	);
};

export default observer(Header);
