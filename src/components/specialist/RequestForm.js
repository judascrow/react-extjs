import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SpecialistTable from "./SpecialistTable";
import SpecialistState from "../../context/specialist/SpecialistState";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const RequestForm = () => {
  const classes = useStyles();

  const params = {
    isSpecialist: false,
  };

  return (
    <div className={classes.root}>
      <SpecialistState>
        <SpecialistTable title="คำขอขึ้นทะเบียน" params={params} />
      </SpecialistState>
    </div>
  );
};

export default RequestForm;
