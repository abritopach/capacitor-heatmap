package com.adrbrpa.capacitorheatmap.heatmaps

import android.graphics.Bitmap
import android.graphics.Paint
import androidx.annotation.ColorInt
import com.adrbrpa.capacitorheatmap.data.models.Point

class SimpleHeatmap: BaseHeatmap {

    /**
     * The data that will be displayed in the heatmap.
     */
    private val data: List<Point>? = null

    /**
     * A buffer for new data that hasn't been displayed yet.
     */
    private val dataBuffer: List<Point>? = null

    /**
     * Whether the information stored in dataBuffer has changed.
     */
    private val dataModified = false

    /**
     * The value that corresponds to the minimum of the gradient scale.
     */
    private val min = Double.NEGATIVE_INFINITY

    /**
     * The value that corresponds to the maximum of the gradient scale.
     */
    private val max = Double.POSITIVE_INFINITY

    /**
     * The amount of blur to use.
     */
    private val mBlur = 0.85

    /**
     * The radius (px) of the circle each data point takes up.
     */
    private val mRadius = 200.0

    /**
     * If greater than 0 this will be used as the transparency for the entire map.
     */
    private val opacity = 0

    /**
     * The minimum opacity to use in the map. Only used when [HeatMap.opacity] is 0.
     */
    private val minOpacity = 0

    /**
     * The maximum opacity to use in the map. Only used when [HeatMap.opacity] is 0.
     */
    private val maxOpacity = 255

    /**
     * The bounds of actual data. For the sake of efficiency this stops us updating outside
     * of where data is present.
     */
    private val mRenderBoundaries = DoubleArray(4)

    /**
     * Colors to be used in building the gradient.
     */
    @ColorInt
    private val colors = intArrayOf(-0x10000, -0xff0100)

    /**
     * The stops to position the colors at.
     */
    private val positions = floatArrayOf(0.0f, 1.0f)

    /**
     * A paint for solid black.
     */
    private val mBlack: Paint? = null

    private val mTransparentBackground = true

    /**
     * A paint for the background fill.
     */
    private val mBackground: Paint? = null

    /**
     * A paint to be used to fill objects.
     */
    private val mFill: Paint? = null

    /**
     * The color palette being used to create the radial gradients.
     */
    private val palette: IntArray? = null

    /**
     * Whether the palette needs refreshed.
     */
    private val needsRefresh = true

    /**
     * Update the shadow layer when the size changes.
     */
    private val sizeChange = false

    /**
     * The top padding on the heatmap.
     */
    private val mTop = 0f

    /**
     * The left padding on the heatmap.
     */
    private val mLeft = 0f

    /**
     * The right padding on the heatmap.
     */
    private val mRight = 0f

    /**
     * The bottom padding on the heatmap.
     */
    private val mBottom = 0f

    /**
     * The maximum width of the rendering surface.
     */
    private val mMaxWidth = 0

    /**
     * The maximum height of the rendering surface.
     */
    private val mMaxHeight = 0

    /**
     * The aspect ratio scale.
     */
    private val mScale: Float? = null

    /**
     * The bitmap that the shadow layer is rendered into.
     */
    private val mShadow: Bitmap? = null

    /**
     * Should the drawing cache be used or should a new bitmap be created.
     */
    private val mUseDrawingCache = false

    override fun initialize() {
        TODO("Not yet implemented")
    }

    override fun destroy() {
        TODO("Not yet implemented")
    }

    override fun setData() {
        TODO("Not yet implemented")
    }

    override fun getData() {
        TODO("Not yet implemented")
    }

    override fun getValueAt() {
        TODO("Not yet implemented")
    }

    override fun clearData() {
        TODO("Not yet implemented")
    }

    override fun addPoint() {
        TODO("Not yet implemented")
    }

    override fun setMax() {
        TODO("Not yet implemented")
    }

    override fun draw() {
        TODO("Not yet implemented")
    }

    override fun resize() {
        TODO("Not yet implemented")
    }

    override fun gradient() {
        TODO("Not yet implemented")
    }

    override fun opacity() {
        TODO("Not yet implemented")
    }

    override fun radius() {
        TODO("Not yet implemented")
    }

    override fun getDataURL() {
        TODO("Not yet implemented")
    }
}