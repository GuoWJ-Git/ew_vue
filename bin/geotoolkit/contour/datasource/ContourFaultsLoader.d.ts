import {ContourFaultList} from '../faults/ContourFaultList';

/**
 * A contour reader for parsing faults data using the built in fault data format. <br>
 * Example valid data file that will parse into a single open fault with four points<br>
 * "O;12346,17069;11142,16975;11258,5566;15319,5579"<br>
 * <br>
 * The following data format is used:<br>
 * (TypeOfFault); // splits fault segments and identifies next fault type.<br>
 * (FaultX0),(FaultY0),(FaultLeft0),(FaultRight0); // x0, y0, optional left0, right0 <br>
 * (FaultX1),(FaultY1),(FaultLeft1),(FaultRight1); // x1, y1, optional left1, right1 <br>
 * <br>
 * FaultLeft and FaultRight are optional, TypeOfFault can be 'o', 'O' for open or <br>
 * 'c', 'C' for closed, any other text will be treated as open fault. <br>
 */
export class ContourFaultsLoader {
    /**
     * A contour reader for parsing faults data using the built in fault data format. <br>
     * Example valid data file that will parse into a single open fault with four points<br>
     * "O;12346,17069;11142,16975;11258,5566;15319,5579"<br>
     * <br>
     * The following data format is used:<br>
     * (TypeOfFault); // splits fault segments and identifies next fault type.<br>
     * (FaultX0),(FaultY0),(FaultLeft0),(FaultRight0); // x0, y0, optional left0, right0 <br>
     * (FaultX1),(FaultY1),(FaultLeft1),(FaultRight1); // x1, y1, optional left1, right1 <br>
     * <br>
     * FaultLeft and FaultRight are optional, TypeOfFault can be 'o', 'O' for open or <br>
     * 'c', 'C' for closed, any other text will be treated as open fault. <br>
     */
    constructor();
    /**
     * Reads faults from a file into a ContourFaultList object and returns it.
     * @param faultData The fault data
     */
    readFaults(faultData: string): ContourFaultList;
}
