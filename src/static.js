export default function store() {
        var flightsets = [
            {
            type: "PolyLine",
            name: "AAL1612",
            cds: [[32.916551, -97.025973],
            [32.89694444, -97.026026],
            [32.89388889, -97.02805556], 
            [32.89388889, -97.03194444], 
            [32.89166667, -97.03194444], 
            [32.89027778, -97.03344389]],
            cat: "Main"
            }, 
            {
            type: "PolyLine", 
            name: "Test",
            cds: [[32.914055, -97.058468],
            [32.902286, -97.058468]],
            cat: "BG"
            }
        ];
    return flightsets;
}