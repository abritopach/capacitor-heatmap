package com.adrbrpa.capacitorheatmap.heatmaps

import com.adrbrpa.capacitorheatmap.data.models.Point

interface BaseHeatmap {

    fun initialize()
    fun destroy()
    /*********/
    // Methods for handling heatmap data.
    /*********/
    fun setData()
    fun getData()
    fun getValueAt()
    fun clearData()
    fun addPoint(point: Point)
    fun setMax(max: Double)
    fun setMin(min: Double)
    /*********/
    // Methods for rendering heatmap.
    /*********/
    fun draw()
    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    fun resize()
    fun gradient()
    fun opacity()
    fun radius()
    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    fun getDataURL()
}