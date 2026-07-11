/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

function addToolbox() {
    return `

<category name="%{BKY_AI_DHT11_CATEGORY}" id="AI_DHT11_CATEGORY" colour="#4CAF50" secondaryColour="#66BB6A">

    <block type="AIbot_register_dht11_sensor_driver_status" id="AIbot_register_dht11_sensor_driver_status">
        <value name="TEMP_NAME">
            <shadow type="text">
                <field name="TEXT">temp</field>
            </shadow>
        </value>
        <value name="TEMP_DESCRIPTION">
            <shadow type="text">
                <field name="TEXT">Temperature</field>
            </shadow>
        </value>
        <value name="HUMI_NAME">
            <shadow type="text">
                <field name="TEXT">humi</field>
            </shadow>
        </value>
        <value name="HUMI_DESCRIPTION">
            <shadow type="text">
                <field name="TEXT">Humidity</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_update_dht11_iot_state" id="AIbot_update_dht11_iot_state">
        <value name="PROP_NAME">
            <shadow type="text">
                <field name="TEXT">temp</field>
            </shadow>
        </value>
        <value name="PROP_VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="DHT_init" id="DHT_init">
        <field name="PIN">26</field>
        <field name="TYPE">11</field>
    </block>

    <block type="KE_dht" id="KE_dht">
    </block>

</category>
`;
}

exports = addToolbox;
