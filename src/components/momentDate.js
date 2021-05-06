import Moment from "react-moment";
import React from 'react';
import 'moment/locale/es';

export const MomentDate = ({children,}) =>
    <Moment fromNow locale="es">{children}</Moment>