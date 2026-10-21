# AI_Tracking

This plugin reads a five-way line tracking module using a **PCF8574 I/O expander** over I2C on the `arduinoEsp32S3` AIBot platform.

## Default I2C configuration

| Setting | Default |
|---|---:|
| PCF8574 address | `0x20` |
| SDA | `8` |
| SCL | `9` |

Connect the module to the board's I2C header. The default values follow the supplied AIBOT reference program. The plugin bundles the supplied PCF8574 library under `lib/PCF8574`.

## Sensor mapping

The tracking value is returned as a five-character string in the following left-to-right order. A value of `0` indicates the black line is detected; a value of `1` indicates a white surface.

| Position | PCF8574 pin | Pattern position |
|---|---|---:|
| Far left | `P4` | 1 |
| Left center | `P0` | 2 |
| Center | `P1` | 3 |
| Right center | `P2` | 4 |
| Far right | `P3` | 5 |

For example, `11011` means the center sensor detects a black line. Use the **Read 5-way line tracking value** block for the complete pattern or the individual-sensor blocks for control decisions.

## Blocks

| Block | Function |
|---|---|
| Initialize I2C 5-way line tracking module | Configures I2C, checks and starts PCF8574, then sets the five input pins. |
| Read 5-way line tracking value | Returns five states from left to right. |
| Read line tracking sensor | Returns the current `0` or `1` state for one selected sensor. |
| Line tracking sensor detects | Provides a Boolean condition for black-line or white-surface detection. |
| I2C 5-way line tracking module is connected | Reports whether initialization found the PCF8574 device. |
| MCP helper blocks | Registers `self.tracking.get`, checks the MCP call name, and returns the selected tracking result. |

> The initialization block must run before using tracking values. If the module is not detected, the connection-status block returns false and sensor reads safely return `1`.
