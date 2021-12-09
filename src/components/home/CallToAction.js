import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import cta from '../../images/cta.svg'

const useStyles = makeStyles(theme => ({
    account: {
        color: "#fff",
        marginLeft: "2rem",
    },
    body: {
        maxWidth: "45rem",
        [theme.breakpoints.down("md")]: {
            padding: "O 1rem",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "O",
        },
    },
    container: {
        marginBottom: "15rem",
    },
    buttonContainer: {
        marginTop: "3rem",
    },
    headingContainer: {
        [theme.breakpoints.down("md")]: {
            padding: "O 1rem",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "O",
        },
    },
    icon : {
        [theme.breakpoints.down("xs")]: {
            height: "18rem",
            width: "20rem",
        },
    },
}))

export default function CallToAction() {
    const classes = useStyles()
    const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

    return (
        <Grid 
            container
            justify="space-around"
            alignItems="center"
            classes={{root: classes.container}}
            direction={matchesMD ? "column" : "row"}
        >
            <Grid item>
                <img src={cta} alt="quality committed" className={classes.icon} />
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <Grid item classes={{root: classes.headingContainer}}>
                        <Typography variant="h1" align={matchesMD ? "center" : undefined}>
                            Committed To Quality
                        </Typography>
                    </Grid>
                    <Grid item classes={{root: classes.body}}>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
                            At VAR X our mission is to provide comfortable, durable, premium designer clothing and clothing accessories to developers and technology enthusiasts.
                        </Typography>
                    </Grid>
                    <Grid item container classes={{root: classes.buttonContainer}} justify={matchesMD ? "center" : undefined}>
                        <Grid item>
                            <Button component={Link} to="/contact" variant="outlined" color="primary">
                                Contact Us
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/account" variant="contained" color="primary" classes={{root: classes.account}}>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}