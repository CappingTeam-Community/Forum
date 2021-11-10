import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Route, withRouter } from 'react-router';
import styles from './BreadCrumbs.module.css';



const BreadCrumbs = (props: any) => {
    //Logic
    console.log(props);
    const { history, location } = props;
    const { pathname } = location;
    console.log(pathname);
    const pathnames = pathname.split("/").filter((x: any) => x);
    console.log(pathnames);

    //Template
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                {pathnames.length > 0 ? (
                <Link underline="hover" color="inherit" onClick={() => history.push("/")}>
                    Home
                </Link>
                ) : ("")}
                {pathnames.map((name: any, index: any) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (<Typography> {name} </Typography>) :
                        (<Link underline="hover" color="inherit" onClick={() => history.push(routeTo)}>{name}</Link>);
                })}

            </Breadcrumbs>
        </div>
    )};

export default withRouter(BreadCrumbs);