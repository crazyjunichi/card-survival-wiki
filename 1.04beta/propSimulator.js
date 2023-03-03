function initPropSimulator() {}

function updatePropSimulator() {
    if (typeof propSimulatorData == "undefined") {
        return;
    }

    let args = propSimulatorData.args;
    let controls = propSimulatorData.controls;
    let valueMap = {};
    args.forEach((arg) => {
        let labelElement = document.getElementById("value_" + arg.key);
        let inputElement = document.getElementById("input_" + arg.key);
        let value = parseInt(inputElement.value);
        if (inputElement.type == "checkbox") {
            value = inputElement.checked ? 1 : 0;
        }
        valueMap[arg.key] = {
            label: arg.name,
            labelElement: labelElement,
            inputElement: inputElement,
            values: [value],
            min: arg.min,
            max: arg.max,
        };
        if (labelElement) {
            if (arg.show) {
                labelElement.innerText = Math.round((value / arg.max) * 1000) / 10 + "%";
            } else {
                labelElement.innerText = value + "";
            }
        }
    });
    let tick = 4 * 24 * 5;
    let step = 4;
    let timeFunc = (v) => v + "TP";

    let timespan = document.getElementById("ps_timespan").value;
    if (timespan == "1d") {
        tick = 4 * 24;
        step = 4;
        timeFunc = (v) => v / 4 + "小时";
    } else if (timespan == "8h") {
        tick = 4 * 8;
        step = 1;
        timeFunc = (v) => v + "TP";
    } else if (timespan == "10d") {
        tick = 4 * 24 * 10;
        step = (4 * 24) / 2;
        timeFunc = (v) => v / 4 / 24 + "天";
    } else if (timespan == "30d") {
        tick = 4 * 24 * 30;
        step = 4 * 24;
        timeFunc = (v) => v / 4 / 24 + "天";
    }
    let labels = ["0"];
    let stepValueMap = {};
    args.forEach((arg) => {
        stepValueMap[arg.key] = valueMap[arg.key].values[valueMap[arg.key].values.length - 1];
    });
    for (let t = 0; t < tick; t++) {
        // let value =
        let curValueMap = {};
        args.forEach((arg) => {
            curValueMap[arg.key] = stepValueMap[arg.key];
        });

        controls.forEach((ctl) => {
            let scale = 1;
            let success = ctl.cond.every((cdt) => {
                let v = stepValueMap[cdt.key];
                if (v == undefined) {
                    return true;
                }
                if (cdt.isStack) {
                    scale = v;
                }
                return Math.floor(v) >= cdt.range[0] && Math.floor(v) <= cdt.range[1];
            });
            if (success) {
                ctl.change.forEach((change) => {
                    curValueMap[change.key] += change.value * scale;
                    curValueMap[change.key] = Math.max(curValueMap[change.key], valueMap[change.key].min);
                    curValueMap[change.key] = Math.min(curValueMap[change.key], valueMap[change.key].max);
                });
            }
        });

        args.forEach((arg) => {
            stepValueMap[arg.key] = curValueMap[arg.key];
        });

        let index = t + 1;
        if (index % step == 0) {
            let label = timeFunc(index);
            labels.push(label);
            args.forEach((arg) => {
                valueMap[arg.key].values.push(curValueMap[arg.key]);
            });
        }
    }

    let dataset = {
        labels: labels,
        datasets: args
            .filter((arg) => {
                return arg.show; // && arg.key == "Progress";
            })
            .map((arg) => {
                let data = valueMap[arg.key].values.map((x) => (x / arg.max) * 100);
                // let data = valueMap[arg.key].values;
                return {
                    label: arg.name.replace(/\<.+\>/g, ""),
                    data: data,
                    borderWidth: 1,
                };
            }),
    };

    if (Chart.instances[0]) {
        Chart.instances[0].data = dataset;
        // Chart.instances[0].options.transitions.active.animation.duration = 0;
        Chart.instances[0].update();
    } else {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
            type: "line",
            data: dataset,
            options: {
                scales: {
                    y: {
                        // beginAtZero: true,
                        // max: 100,
                        ticks: {
                            callback: function (value, index, ticks) {
                                return value + "%";
                            },
                        },
                    },
                },
                animation: {
                    duration: 0,
                },
            },
        });
    }
}

updatePropSimulator();
