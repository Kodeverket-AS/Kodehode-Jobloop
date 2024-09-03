import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const AlertSuccess = ({ title, text }) => {
  return (
    <div className="flex flex-col justify-center max-w-screen-sm mx-auto p-4">
      <Alert
        severity="success"
        variant="filled">
        <AlertTitle>{title}</AlertTitle>
        {text}
      </Alert>
    </div>
  );
};

export const AlertInfo = ({ title, text }) => {
  return (
    <div className="flex flex-col justify-center max-w-screen-sm mx-auto p-4">
      <Alert
        severity="info"
        variant="filled">
        <AlertTitle>{title}</AlertTitle>
        {text}
      </Alert>
    </div>
  );
};

export const AlertWarning = ({ title, text }) => {
  return (
    <div className="flex flex-col justify-center max-w-screen-sm mx-auto p-4">
      <Alert
        severity="warning"
        variant="filled">
        <AlertTitle>{title}</AlertTitle>
        {text}
      </Alert>
    </div>
  );
};

export const AlertError = () => {
  return (
    <div className="flex flex-col justify-center max-w-screen-sm mx-auto p-4">
      <Alert
        severity="error"
        variant="filled">
        <AlertTitle>Oops!</AlertTitle>
        Her har noe gått galt. Vennligst prøv igjen, eller kontakt oss.
      </Alert>
    </div>
  );
};
