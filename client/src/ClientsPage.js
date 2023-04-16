import { Typography, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
// import { userContext } from "./App";
import ClientCard from "./ClientCard";
import AddEditClientForm from "./AddEditClientForm";
import AddInvoiceForm from "./AddInvoiceForm";

function ClientsPage({ errorsToDisplay, handleAddInvoice, userClients, clients, handleDeleteInvoice, handleUpdateClient, errorData, setErrorData }) {
  const [showForm, setShowForm] = useState(false);
  const [nameForm, setNameForm] = useState("");
  const [poc, setPoc] = useState("");
  const [pocEmail, setPocEmail] = useState("");
  const [editClient, setEditClient] = useState(false)
  const [editId, setEditId] = useState(null);

  const clientsToDisplay = userClients.map((client) => {
    return (
      <Grid item xs={12} md={6} lg={4} xl={3} key={client.id}>
        <ClientCard
          id={client.id}
          key={client.id}
          name={client.name}
          point_of_contact={client.point_of_contact}
          poc_email={client.poc_email}
          invoices={client.invoices}
          handleDeleteInvoice={handleDeleteInvoice}
          showForm={showForm}
          setShowForm={setShowForm}
          nameForm={nameForm}
          setNameForm={setNameForm}
          poc={poc}
          setPoc={setPoc}
          pocEmail={pocEmail}
          setPocEmail={setPocEmail}
          editClient={editClient}
          setEditClient={setEditClient}
          setEditId={setEditId}
        />
      </Grid>
    );
  });


  // *** Return of JSX *** 
  return (
    <div>
      <Typography variant="h2" component="h3">
        Clients Page
      </Typography>
      <AddEditClientForm
        showForm={showForm}
        setShowForm={setShowForm}
        nameForm={nameForm}
        setNameForm={setNameForm}
        poc={poc}
        setPoc={setPoc}
        pocEmail={pocEmail}
        setPocEmail={setPocEmail}
        editClient={editClient}
        setEditClient={setEditClient}
        editId={editId}
        setEditId={setEditId}
        handleUpdateClient={handleUpdateClient}
        errorsToDisplay={errorsToDisplay} 
        setErrorData={setErrorData}
      />
      <AddInvoiceForm 
        errorData={errorData} 
        setErrorData={setErrorData}
        clients={clients}
        errorsToDisplay={errorsToDisplay}
        handleAddInvoice={handleAddInvoice}
      />
      <Grid container spacing={2}>
        {clientsToDisplay}
      </Grid>
    </div>
  );
}

export default ClientsPage;
