import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Lottie from 'react-lottie'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import animationData from '../../images/data.json'

const useStyles = makeStyles(theme => ({
    textContainer: {
        padding: "2rem",
        [theme.breakpoints.down("xs")]: {
            padding: "1rem",
        },
    },
    heading: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "3rem",
        },
    },
}))

export default function HeroBlock() {

    const classes = useStyles()

    const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))
    const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
    const matchesLG = useMediaQuery(theme => theme.breakpoints.down("lg"))

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData
    }

    return (
        <Grid container justify="space-around" alignItems="center">
            <Grid item classes={{root: classes.textContainer}}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h1" align="center" classes={{root: classes.heading}}>
                            The Premier
                            <br />
                            Developer Clothing Line
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" align="center">
                            high quality, custom-designed shirts, hats and hoodies
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Lottie isStopped options={defaultOptions} width={matchesXS ? "20rem" : matchesMD ? "30rem" : matchesLG ? "40rem" : "50rem"} />
            </Grid>
        </Grid>
    )
}