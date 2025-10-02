"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const player_service_1 = require("../services/player.service");
const router = (0, express_1.Router)();
exports.default = router;
/**
 * @openapi
 * /players/{id}:
 *   get:
 *     summary: Get player by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the player
 *     responses:
 *       200:
 *         description: Player found
 *       404:
 *         description: Player not found
 */
router.get("/:id", (async (req, res) => {
    const { id } = req.params;
    try {
        const player = await (0, player_service_1.getPlayer)(id);
        res.status(200).json(player);
    }
    catch (err) {
        res.status(404).json(err);
    }
}));
