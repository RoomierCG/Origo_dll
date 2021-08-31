import "../../../static/styles/components/nav-main.scss"
import Grid from "@material-ui/core/Grid"

export default function App(){
    return (
        <header>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={2}>
                    <a href="" >a</a>
                </Grid>
                <Grid item xs={6}>
                    <a href="">a</a>
                </Grid>
            </Grid>
        </header>
    );
}